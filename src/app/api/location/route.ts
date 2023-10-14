import dbConnect from '@/lib/db-connect'
import User from '@/models/User'

export async function PATCH(request: Request) {
  const res = await request.json()
  await dbConnect()

  if (!res.id || !res.longitude || !res.latitude || !res.amount) {
    throw new Error('Missing information')
  }

  if (res.min_check_in && res.min_check_in < 0) {
    throw new Error('Invalid check in amount')
  }

  try {
    const user = await User.findById(res.id)
    if (!user) {
      throw new Error('User not found')
    }

    user.locations.push({
      longitude: res.longitude,
      latitude: res.latitude,
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
