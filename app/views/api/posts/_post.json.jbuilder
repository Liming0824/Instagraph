json.extract! post, :id, :image_url, :created_at
json.photo_image_url url_for(post.photo)
json.posterId post.user_id
json.likes post.likes.map{|like| like.liker_id}
json.comments post.comments.each do |comment|
  json.extract! comment, :id, :body, :author_id, :post_id
  json.author_name comment.author.username
  json.post_author_id comment.post_author.id
end
