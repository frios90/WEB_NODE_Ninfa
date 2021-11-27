    
    $(document).ready(function() {
        crearMenuTiposDeProductos(data.productos.tipos);
        crearInventarioDeProductos(data.productos.inventario);
        $(".item").on("click", (producto) => {
            const buscarProducto = data.productos.inventario.find((registro) => {
                if (registro.imgId === producto.target.id) {
                    return registro;
                }
            });
            $("#modalGenericoImg").attr("src", buscarProducto.img);
            $("#modalTipoProducto").html(buscarProducto.tipo);
            $("#modalPrecioProducto").html(buscarProducto.precio);
            $("#modalTituloProducto").html(buscarProducto.titulo);
            $("#modalDescripcionProducto").html(buscarProducto.descripcion);
        })
    });
    const crearMenuTiposDeProductos = (tipos) => {
        $("#filter-list").html("");
        var listado = "";
        tipos.forEach((v, i) => {
            listado += `<li class="filter" data-filter="${v.dataFilter}">${v.description}</li>|`;
        })
        $("#filter-list").html(listado);
    }
    const crearInventarioDeProductos = (listaInventario) => {

        listaInventario.forEach((v, i) => {
            $(v.target).html("");
            let inventario = `
                            <img src="${v.img}" id="${v.imgId}" alt="prod" /> 
                            <div> 
                                <span class="title"> 
                                ${v.titulo} 
                                </span> 
                                <span class="description"> 
                                    ${v.tipo} 
                                </span> 
                            </div> 
                            
                        `;
            $(v.target).html(inventario);
        })

    }