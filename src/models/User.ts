import mongoose from 'mongoose'

interface Locations {
  geo: {
    type: 'Point'
    coordinates: [number, number]
  }
  amount: number
  claimed: boolean
}

export interface Users extends mongoose.Document {
  username: string
  name: string
  image: string
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
    default: '',
  },
  locations: [
    {
      geo: {
        type: {
          type: String,
          enum: ['Point'],
          required: true,
        },
        coordinates: {
          type: [Number],
          required: true,
        },
      },
      amount: {
        type: Number,
        required: [true, 'Please include the amount you want to set'],
      },
      claimed: {
        type: Boolean,
        default: false,
      },
    },
  ],
  min_check_in: {
    type: Number,
    default: 1,
    required: true,
  },
})

UserSchema.index({ 'locations.geo': '2dsphere' })

export default mongoose.models.User || mongoose.model<Users>('User', UserSchema)
