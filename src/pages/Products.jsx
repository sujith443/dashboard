import { FaBox } from 'react-icons/fa'

function Products() {
  const products = [
    { name: "Wireless Headphones", price: "$99.99", description: "High-quality wireless headphones with noise cancellation.", stock: 25 },
    { name: "Smart Watch", price: "$199.99", description: "Feature-rich smartwatch with fitness tracking.", stock: 15 },
    { name: "Laptop Stand", price: "$49.99", description: "Adjustable aluminum laptop stand for better ergonomics.", stock: 30 }
  ]

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">
          <FaBox className="me-2" />
          Product Management
        </h5>
        <button className="btn btn-primary">
          <FaBox className="me-2" />
          Add Product
        </button>
      </div>
      
      <div className="row g-4">
        {products.map((product, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card modern-card product-card">
              <div className="card-body">
                <div className="product-image mb-3">
                  <FaBox size={40} className="text-primary" />
                </div>
                <h6 className="card-title">{product.name}</h6>
                <p className="card-text text-muted">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="h5 mb-0 text-primary">{product.price}</span>
                  <span className="text-muted">Stock: {product.stock}</span>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm flex-fill">Edit</button>
                  <button className="btn btn-outline-danger btn-sm flex-fill">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products