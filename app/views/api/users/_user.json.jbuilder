json.extract! user, :id, :username, :user_img_url, :bio
json.photo_image_url url_for(user.user_photo)
json.posts user.posts do |post|
  json.set! post.id do
    json.extract! post, :id, :image_url, :created_at
    json.photo_image_url url_for(post.photo)
    json.posterId post.user_id
    json.likes post.likes.map{|like| like.liker_id}
  end
end

# partial shouldn't be over file, post partial couold just be using in post file,
# so inside this user partial, we can't use 'json.partial! 'api/posts/post` post: post'
# instead line 6-9
