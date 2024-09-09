let post = new CreateBlogPost('a','b','c')



//constructor function 
function CreateBlogPost( title, body, author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

console.log(post);