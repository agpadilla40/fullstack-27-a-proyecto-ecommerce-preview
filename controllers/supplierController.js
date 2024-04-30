import Supplier from '../models/Supplier.js';

const createSupplier = async (req, res) => {

    try {
        const newSupplier = await Supplier.create(req.body);
        res.json(newSupplier);
    } catch (error) {
        res.status(500).json({ 
            msg: 'Error creating supplier', 
            error,
        });
    }
};

const getAllSuppliers = async (req, res) => {
    const suppliers = await Supplier.find({
        isDeleted: false
    });
    res.json(suppliers);
};

const getSupplierById = async (req, res) => {
    const supplier = await Supplier.findById(req.params.supplierId);
    res.json(supplier);
};

const updateSupplier = async (req, res) => {
    const { supplierId } = req.params;
    const updatedSupplier = await Supplier.updateOne(
        {
          _id: supplierId,
        }, 
        req.body
    );
    res.json(updatedSupplier);
    };

    const deleteSupplier = async (req, res) => {
        
        const deletedSupplier = await Supplier.findByIdAndUpdate(
            
            req.params.supplierId,

            {
              isDeleted: true,
            }, 

            {
                new: true,
            }
        );

        res.json(deletedSupplier);
    }
    

export { createSupplier, getAllSuppliers, getSupplierById, updateSupplier, deleteSupplier };