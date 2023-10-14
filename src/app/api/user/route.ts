import dbConnect from '@/lib/db-connect'
import User from '@/models/User'

export async function POST(request: Request) {
  const res = await request.json()
  await dbConnect()

  try {
    const user = await User.create({
      username: res.username,
      name: res.name,
      image_url: res.image_url,
      wallet_address: res.wallet_address,
    })
    return Response.json({ userId: user._id })
  } catch (error) {
    console.error(error)
    throw new Error('Failed to create user')
  }
}
