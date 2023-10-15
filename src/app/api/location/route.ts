import dbConnect from '@/lib/db-connect'
import User from '@/models/User'
import { getServerSession } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'
import { NextApiRequest, NextApiResponse } from 'next'

export async function PATCH(request: NextRequest, response: NextResponse) {
  const session = await getServerSession(
    request as unknown as NextApiRequest,
    {
      ...response,
      getHeader: (name: string) => response.headers?.get(name),
      setHeader: (name: string, value: string) =>
        response.headers?.set(name, value),
    } as unknown as NextApiResponse,
    authOptions,
  )

  const res = await request.json()
  await dbConnect()

  if (!session || !session.user) {
    throw new Error('Not authenticated')
  }

  const userId = (session?.user as any).id

  if (!userId || !res.longitude || !res.latitude || !res.amount) {
    throw new Error('Missing information')
  }

  if (res.min_check_in && res.min_check_in < 0) {
    throw new Error('Invalid check in amount')
  }

  try {
    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }

    user.locations.push({
      geo: {
        type: 'Point',
        coordinates: [res.longitude, res.latitude],
      },
      amount: res.amount,
      min_check_in: res.min_check_in,
    })

    await user.save()

    return Response.json({ userId: user._id })
  } catch (error) {
    console.error(error)
    throw new Error('Failed to create user')
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  const session = await getServerSession(
    request as unknown as NextApiRequest,
    {
      ...response,
      getHeader: (name: string) => response.headers?.get(name),
      setHeader: (name: string, value: string) =>
        response.headers?.set(name, value),
    } as unknown as NextApiResponse,
    authOptions,
  )

  if (!session || !session.user) {
    throw new Error('Not authenticated')
  }

  const userId = (session?.user as any).id

  if (!userId) {
    throw new Error('User not found')
  }

  const { searchParams } = new URL(request.url)
  const longitude = searchParams.get('longitude')
  const latitude = searchParams.get('latitude')

  try {
    const users = await User.find({
      "locations.geo": {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 2000, // 2km = 2000 meters
        },
      },
    })
    console.log("users: ", users)

    return Response.json(users)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to create user')
  }
}
