json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :user_img_url;
      json.photo_image_url url_for(user.user_photo)
      json.posts user.posts do |post|
          json.partial! 'api/posts/post', post: post
      end
    end
  end
end

#
#
# json.users do
#   @users.each do |user|
#     json.set! user.id do
#       json.extract! user, :id, :username, :user_img_url;
#       json.photo_image_url url_for(user.user_photo)
#       json.posts do
#         user.posts.each do |post|
#           json.set! post.id do
#             json.partial! 'api/posts/post', post: post
#           end
#         end
#       end
#     end
#   end
# end
