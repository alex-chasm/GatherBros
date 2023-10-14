import mongoose from 'mongoose'

interface Locations {
  longitude: number
  latitude: number
  amount: number
  claimed: boolean
}

export interface Users extends mongoose.Document {
  username: string
  name: string
  image_url: string
  locations: Locations[]
  min_check_in: number
}

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
  },
  name: {
    type: String,
    required: false,
  },
  image_url: {
    type: String,
    default: "",
  },
  locations: [
    {
      longitude: {
        type: Number,
        required: [true, 'Please include the longitude'],
      },
      latitude: {
        type: Number,
        required: [true, 'Please include the latitude'],
      },
      amount: {
        type: Number,
        required: [true, 'Please include the amount you want to set'],
      },
    },
  ],
  min_check_in: {
    type: Number,
    default: 1,
    required: true,
  },
  claimed: {
    type: Boolean,
    default: false,
  }
})

export default mongoose.models.User || mongoose.model<Users>('User', UserSchema)
