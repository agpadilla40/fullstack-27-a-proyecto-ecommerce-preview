import Cart from '../models/Cart.js';

const createCart = async (req, res) => {

    try {
        const newCart = await Cart.create(req.body);
        res.json(newCart);
    } catch (error) {
        res.status(500).json({ 
            msg: 'Error creating cart', 
            error,
        });
    }
};

const getAllCarts = async (req, res) => {
    const carts = await Cart.find({
        isDeleted: false
    });
    res.json(carts);
};

const getCartById = async (req, res) => {
    const cart = await Cart.findById(req.params.cartId);
    res.json(cart);
};

const updateCart = async (req, res) => {
    const { cartId } = req.params;
    const updatedCart = await Cart.updateOne(
        {
          _id: cartId,
        }, 
        req.body
    );
    res.json(updatedCart);
    };

    const deleteCart = async (req, res) => {
        
        const deletedCart = await Cart.findByIdAndUpdate(
            
            req.params.cartId,

            {
              isDeleted: true,
            }, 

            {
                new: true,
            }
        );

        res.json(deletedCart);
    }
    

export { createCart, getAllCarts, getCartById, updateCart, deleteCart };