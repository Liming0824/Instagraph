json.extract! comment, :id, :body, :post_id, :author_id
json.author_name comment.author.username
json.post_author_id comment.post_author.id
