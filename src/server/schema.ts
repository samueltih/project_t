import { Schema, Types } from "mongoose";

// Domain
interface Quote {
     item: Array<any>,
     createdAt: number,
     updatedAt: number
}

type JobStatus = "pending" | "in_progress" | "done" | "cancelled";

interface Review {
    job: Types.ObjectId,
    rating: number,
    testimony: String,
    createdAt: number
}

interface Job {
    title: String,
    description: String,
    selectedQuote: Types.ObjectId | Quote,
    status: JobStatus,
    postedBy: Types.ObjectId,
    createdAt: number,
    updatedAt: number
}

const jobSchema = new Schema<Job>(
  {
    title: String,
    description: String,
    postedBy: Types.ObjectId,
    selectedQuote: {
        type: Types.ObjectId,
        ref: 'Quote'
    },
    status: {
      type: String,
      enum: ["pending", "in_progress", "done", "cancelled"],
    },
  },
  {
    timestamps: true,
  }
);

const QuoteSchema = new Schema({
    number: {
        type: String,
        index: true,
        unique: true
    }
}, {
    timestamps: true
})

const workerschema = new Schema(
  {
    userRef: {
        type: String,
        index: true,
        unique: true
    },
    firstName: String,
    lastName: String,
    intro: {
      type: String,
      maxLength: 200
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, 'User email is required']
    },
    phoneNumber: String,
    address: String,
    postalBox: String,

    wages: {
        amount: Number,
        currency: {
            type: String,
            minlength: 3,
            maxlength: 3
        },
        period: {
            type: String,
            enum: ['hour', 'day', 'week', 'month', 'year']
        }
    }
  },
  {
    timestamps: true,
  }
);
