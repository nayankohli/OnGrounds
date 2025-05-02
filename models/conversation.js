const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }
}, { 
    timestamps: true 
});
conversationSchema.index({ 'participants': 1 });

module.exports = mongoose.model('Conversation', conversationSchema);