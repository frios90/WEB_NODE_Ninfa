const data = {
    productos: {
        tipos: [
            {
                dataFilter: "all",
                description: "Todos"
            },      
            {
                dataFilter: "cremas",
                description: "Cremas"
            }, 
            {
                dataFilter: "deos",
                description: "Desodorantes"
            },    
            {
                dataFilter: "capilar",
                description: "Capilar"
            },
            {
                dataFilter: "jabones",
                description: "Jabones"
            },
            {
                dataFilter: "facial",
                description: "Facial"
            },
            {
                dataFilter: "esoteria",
                description: "Esotería"
            },
            
        ],
        inventario: [
/**cremas */
            {
                target: "#idCrema1",
                imgId: "idImageCrema1",
                img: "images/cremas/Crema_antiacne.png",
                tipo: "cremas",
                titulo: "Crema Antiacne",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idCrema2",
                imgId: "idImageCrema2",
                img: "images/cremas/Crema_antiage.png",
                tipo: "cremas",
                titulo: "Crema Antiage",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idCrema3",
                imgId: "idImageCrema3",
                img: "images/cremas/Crema_cicatrizacion.png",
                tipo: "cremas",
                titulo: "Crema Cicatrización",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idCrema4",
                imgId: "idImageCrema4",
                img: "images/cremas/Crema_hidratacion.png",
                tipo: "cremas",
                titulo: "Crema Hidratación",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idCrema5",
                imgId: "idImageCrema5",
                img: "images/cremas/Crema_pielsensible.png",
                tipo: "cremas",
                titulo: "Crema Piel Sensible",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idCrema6",
                imgId: "idImageCrema6",
                img: "images/cremas/Crema_prev_estrias.png",
                tipo: "cremas",
                titulo: "Crema Prevención de estrías",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idCrema7",
                imgId: "idImageCrema7",
                img: "images/cremas/Crema_psoriasis.png",
                tipo: "cremas",
                titulo: "Crema Psoriasis",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idCrema8",
                imgId: "idImageCrema8",
                img: "images/cremas/Manchas.png",
                tipo: "cremas",
                titulo: "Crema Manchas",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
/**desodorantes */
            {
                target: "#idDeos1",
                imgId: "idImageDeo1",
                img: "images/deos/Desodorante_arboldete.png",
                tipo: "cremas",
                titulo: "Crema Arbol de Té",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idDeos2",
                imgId: "idImageDeo2",
                img: "images/deos/Desodorante_cipres.png",
                tipo: "cremas",
                titulo: "Crema Cipres",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
/**capilar */
            {
                target: "#idCapilar1",
                imgId: "idImageCapilar1",
                img: "images/capilar/Serumbarba.png",
                tipo: "capilar",
                titulo: "Serum Barba",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idCapilar2",
                imgId: "idImageCapilar2",
                img: "images/capilar/Serumcapilar.png",
                tipo: "capilar",
                titulo: "Serum Capilar",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
/**facial */
            {
                target: "#idFacial1",
                imgId: "idImageFacial1",
                img: "images/facial/Gel_rosacea.png",
                tipo: "facial",
                titulo: "Gel Rosacea",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idFacial2",
                imgId: "idImageFacial2",
                img: "images/facial/tonicofacial.png",
                tipo: "facial",
                titulo: "Tónico Facial",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
/**jabones */
            {
                target: "#idJabon1",
                imgId: "idImageJabon1",
                img: "images/jabones/Jabonaloe.png",
                tipo: "jabones",
                titulo: "Jabón de Alóe",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idJabon2",
                imgId: "idImageJabon2",
                img: "images/jabones/Jaboncarbon.png",
                tipo: "jabones",
                titulo: "Jabón de Carbón",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idJabon3",
                imgId: "idImageJabon3",
                img: "images/jabones/Jabonmanzanilla.png",
                tipo: "jabones",
                titulo: "Jabón de Manzanilla",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idJabon4",
                imgId: "idImageJabon4",
                img: "images/jabones/Jabonnaranja.png",
                tipo: "jabones",
                titulo: "Jabón de Naranja",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
/**esotería */
            {
                target: "#idEsoteria1",
                imgId: "idImageEsoteria1",
                img: "images/esoteria/Brumatransmuta.png",
                tipo: "esoteria",
                titulo: "Bruma Transmuta",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idEsoteria2",
                imgId: "idImageEsoteria2",
                img: "images/esoteria/Brumavital.png",
                tipo: "esoteria",
                titulo: "Bruma Vital",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },
            {
                target: "#idEsoteria3",
                imgId: "idImageEsoteria3",
                img: "images/esoteria/Salesoterica.png",
                tipo: "esoteria",
                titulo: "Sal Esotérica",
                descripcion: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure",
                precio: "$6.000"
            },






            
            
        ]
    }
};