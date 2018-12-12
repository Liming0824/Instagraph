# means this channel receiving data from App.room wherever
# channel is called "RoomChannel"
class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed

  end

  def follow(data)

    # every ActionCable.server.broadcast " name ", message: data
    # when name is "room_channel",

    # every broadcast, goes to the "App.cable.subscriptions.create" -- receive
    ActionCable.server.broadcast "room_channel", message: data
  end

  def unfollow(data)
    ActionCable.server.broadcast "room_channel", message: data
  end


end
