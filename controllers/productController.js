import Product from '../models/Product.js';

const createProduct = async (req, res) => {

    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ 
            msg: 'Error creating product', 
            error,
        });
    }
};

const getAllProducts = async (req, res) => {
    const products = await Product.find({
        isDeleted: false
    });
    res.json(products);
};

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.json(product);
};

const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const updatedProduct = await Product.updateOne(
        {
          _id: productId,
        }, 
        req.body
    );
    res.json(updatedProduct);
    };

    const deleteProduct = async (req, res) => {
        
        const deletedProduct = await Product.findByIdAndUpdate(
            
            req.params.productId,

            {
              isDeleted: true,
            }, 

            {
                new: true,
            }
        );

        res.json(deletedProduct);
    }
    

export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };