'use strict'

let Producto = require("../Models/modelProducto");
//crear un objeto controller tipo Json

let controller = {

    producto: (req,res)=>{
        res.status(200).send({
            message: 'soy producto'
        });
    },

    //metodo Listar productos
    getProductos: function (req,res){
        Producto.find({}).exec((err,productos)=>{
            if(err){
                return res.status(500).send({
                    message: "error al devolver los datos"
                });
            }    
            if(!productos){
                return res.status(404)
                          .send({message:"no hay proyectos"});
            }
            return res.status(200).send({productos});
        });
    },

    //metodo de guardar Producto
    saveProducto: function(req,res){
        
        let pro = new Producto();

        let params = req.body;

        pro.nombre = params.nombre;
        pro.descripcion = params.descripcion;
        pro.estado = params.estado;
        pro.imagen = params.imagen;

        pro.save((err,webStored)=>{
            if(err){
                return res.status(500).send({
                    mensaje: "no se ha guardado el producto"
                })
            }
            if(!webStored){
                return releaseEvents.status(404).send({
                    mensaje: "no se ha podido guardar el producto"
                })
            }
            return res.status(200).send({
                pro: webStored,
                message: "Metodo Exitoso; Producto Guardado"
            });
        })
    },

    //metodo
    getProducto: function(req,res){
        let productoId = req.params.id;
        Producto.findById(productoId,(err,pro)=>{
            if(err){
                return res.status(500)
                          .send({message:"error al devolver los datos"});  
            }
            if(!pro){
                return res.status(404)
                           .send({message:"el proyecto no existe"}); 
            }
            return res.status(200).send({
                pro
            });
        });
    },
    //metodo Actualizar Producto
    updateProducto: function(req,res){
        let productoId = req.params.id;
        let update = req.body;
        Producto.findByIdAndUpdate(productoId,update,(err,productoupdate)=>{
            if(err){
                return res.status(500).send({message:"error al actualizar"});
            }
            if(!productoupdate){
                return res.status(404).send({message:"no se ha actualizado el producto"});
            }
            return res.status(200).send({
                pro:productoupdate
            });
        })
    },
    //metodo Eliminar Producto
    deleteProducto: function(req,res){
        let productoId = req.params.id;
        Producto.findByIdAndDelete(productoId,(err,productoRemove)=>{
            if(err){
                return res.status(500).send({message: "No se ha podido eliminar el producto"});
            }
            if(!productoRemove){
                return res.status(404).send({message:"No se puede eliminar ese proyecto"});
            }
            return res.status(200).send({
                producto: productoRemove,
                message:"Producto eliminado"})
        })
    }
}
module.exports = controller;