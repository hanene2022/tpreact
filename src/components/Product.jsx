

function Products() {
let title = "learn how to create apps with react2023"
let products=[
  {
    id:1,
    label:"iphone11",
    price:1500
  },
  {
    id:2,
    label:"iphone12",
    price:2500
  },
  {
    id:3,
    label:"iphone13",
    price:3500
  }
]


  return (
    <div>
<h1>{title}</h1>
<ul>{ products.map(product=>(
  <li key={product.id}>{product.label}</li>
))}

</ul>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Laudantium iusto totam sit, dicta beatae pariatur amet itaque
   dolores fugiat tempora.</p>
    </div>
  )
}

export default Products