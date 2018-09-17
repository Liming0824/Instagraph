json.extract! post, :id, :image_url
json.photo_image_url url_for(post.photo)
json.posterId post.user_id
json.likes post.likes.map{|like| like.liker_id}
