import asyncHandler from 'express-async-handler';

const coverImages = [
  { id: 0, name: 'image0', url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Famazing-promotion-fast-food-social-media-post-template_26245925.htm&psig=AOvVaw09PwFOysXcwILCdmSYc1V7&ust=1684910289101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiDnI3qiv8CFQAAAAAdAAAAABAE' },
  { id: 1, name: 'image1', url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.postermywall.com%2Findex.php%2Fart%2Ftemplate%2F35bb0660e8d9869292396db67abda272%2Ffast-food-restaurant-promotion-instagram-post-design-template&psig=AOvVaw09PwFOysXcwILCdmSYc1V7&ust=1684910289101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiDnI3qiv8CFQAAAAAdAAAAABAI' },
  { id: 2, name: 'image2', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedEglChoLr5-i4AuEvoibOdfvm54Ruhnuk8sqNh8E&s' },
  { id: 3, name: 'image3', url: 'https://cdn4.vectorstock.com/i/1000x1000/10/88/fast-food-restaurant-social-media-advertising-vector-31181088.jpg' },
  { id: 4, name: 'image4', url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood-promotion&psig=AOvVaw09PwFOysXcwILCdmSYc1V7&ust=1684910289101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiDnI3qiv8CFQAAAAAdAAAAABAi' },
]

const fetchAllCoverImages = asyncHandler( async(req, res) => {
  res.status(200)
    .json({
      coverImages,
      message: "cover images fetched successfully"
    })
})

export { fetchAllCoverImages };