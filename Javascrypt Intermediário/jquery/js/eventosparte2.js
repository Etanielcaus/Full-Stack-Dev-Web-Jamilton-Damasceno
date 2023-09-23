//!SECTIONInterface
//FIXME - Focus, blur, change, select, copy, paste, cut

    $(function(){ //NOTE - [name=entrada] [name=selecao]
        // #region interface
        //$('[name=entrada]').on('blur', function (e) {
        //    console.log('blur');
        //});

        //$('[name=selecao]').on('focus', function (e) {
        //    console.log('focus');
        //});

        //$('[name=formulario]').on('submit', function (e) { //NOTE - Submit
        //        console.log('submit');
         //   });
        // #endregion
        
        //!SECTIONTeclado
        //FIXME - Teclado: input, keydown, keyup, keypress
        // #region Teclado
        $('body').on('keypress', function (e) { //NOTE - Submit
                   console.log('keypress' + e.key);
                });
        })
        // #endregion


        // #region Capturar formulário
        $('[name=enviar]').on('click', function (e) {
            e.preventDefault();
            let nome = $('[name=entrada]').val(); //NOTE - Aqui ele captura o que foi escrito no formulario
            let sexo = $('[name=selecao]').val();
            let idade = $('[name=idade]:checked').val();
            let termo = $('[name=termo]:checked').val();
            console.log(`nome: ${nome}, sexo: ${sexo}, idade: ${idade}, termo: ${termo}`); //NOTE - Aqui ele exibe os itens capturados
        });
        // #endregion