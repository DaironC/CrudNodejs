'use strict'

let Usuario = require("../Models/modelUsuario");
//crear un objeto controller tipo Json

let controller = {

    login: (req,res)=>{
        res.status(200).send({
            message: 'Soy Login'
        });
    },

    //metodo de guardar usuario Post
        saveUsuario: function(req,res){
            
            let usuario = new Usuario();

            let params = req.body;
            usuario.usuario = params.usuario;
            usuario.clave = params.clave;

            usuario.save((err,webStored)=>{
                if(err){
                    return res.status(500).send({
                        mensaje: "no se ha guardado el usuario"
                    })
                }
                if(!webStored){
                    return releaseEvents.status(404).send({
                        mensaje:"no se ha podido guardar el usuario"
                    })
                }
                return res.status(200).send({
                    usuario: webStored,
                    message:'Metodo exitoso; Usuario Guardado '
                });

            })
        },

        //Metodo Listar Colecciones
        getUsuario: function(req,res){
            let usuarioId = req.params.id;

            Usuario.findById(usuarioId,(err,usuario)=>{
                if(err){
                    return res.status(500)
                              .send({message: "error al devolver los datos"});
                }
                if(!usuario){
                    return res.status(404)
                              .send({message:"el usuario no existe"});
                }
                return res.status(200).send({
                    usuario
                });
            });
        },
        
        //metodo devolver listado
        getUsuarios: function (req,res){
            Usuario.find({}).exec((err,usuarios)=>{
                if(err){
                    return res.status(500).send({
                        message: "error al devolver los datos"
                    });
                }    
                if(!usuarios){
                    return res.status(404)
                              .send({message:"no hay proyectos"});
                }
                return res.status(200).send({usuarios});
            });
        },
        
        //metodo Actualizar Usuario
        updateUsuario: function(req,res){
            let usuarioId = req.params.id;
            let update = req.body;

            Usuario.findByIdAndUpdate(usuarioId,update, (err,usuarioUpdate)=>{
                if(err){
                    return res.status(500).send({message:"Error al actualizar"});
                }
                if(!usuarioUpdate){
                    return res.status(500).send({message:"No se ha podido actualizar el proyecto"});
                }
                return res.status(200).send({
                    usuario : usuarioUpdate
                })
            });
        },

        //metodo eliminar Usuario
        deleteUsuario: function(req,res){
            let usuarioId = req.params.id;
            Usuario.findByIdAndDelete(usuarioId,(err,usuarioRemove)=>{
                if(err){
                    return res.status(500).send({message:"No se ha podido Eliminar Usuario"});
                }
                if(!usuarioRemove){
                    return res.status(404).send({message:"No se puede eliminar ese proyecto"});
                }
                return res.status(200).send({
                    message:"Usuario Eliminado",
                    usuario:usuarioRemove
                });
            });
        }
    
}
module.exports = controller;