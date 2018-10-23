# App.room = App.cable.subscriptions.create "RoomChannel",
#   connected: ->
#     # Called when the subscription is ready for use on the server
#
#   disconnected: ->
#     # Called when the subscription has been terminated by the server
#
#   received: (data) ->
#     alert data['message']
#     # Called when there's incoming data on the websocket for this channel
#
#   follow: (user_id) ->
#     @perform 'follow', message: user_id
#
#   unfollow: (user_id) ->
#     @perform 'unfollow', message: user_id
