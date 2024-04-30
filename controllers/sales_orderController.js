import Sales_order from '../models/Sales_order.js';

const createSales_order = async (req, res) => {

    try {
        const newSales_order = await Sales_order.create(req.body);
        res.json(newSales_order);
    } catch (error) {
        res.status(500).json({ 
            msg: 'Error creating sales order', 
            error,
        });
    }
};

const getAllSales_orders = async (req, res) => {
    const sales_orders = await Sales_order.find({
        isDeleted: false
    });
    res.json(sales_orders);
};

const getSales_orderById = async (req, res) => {
    const sales_order = await Sales_order.findById(req.params.shopping_basketId);
    res.json(sales_order);
};

const updateSales_order = async (req, res) => {
    const { sales_orderId } = req.params;
    const updatedSales_order = await Sales_order.updateOne(
        {
          _id: sales_orderId,
        }, 
        req.body
    );
    res.json(updatedSales_order);
    };

    const deleteSales_order = async (req, res) => {
        
        const deletedSales_order = await Sales_order.findByIdAndUpdate(
            
            req.params.sales_orderId,

            {
              isDeleted: true,
            }, 

            {
                new: true,
            }
        );

        res.json(deletedSales_order);
    }
    

export { createSales_order, getAllSales_orders, getSales_orderById, updateSales_order, deleteSales_order };