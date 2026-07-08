fetch('products.json')
.then(response => response.json())
.then(data => {
 
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const swiper_items_sale = document.getElementById("swiper_items_sale")

    const swiper_qamiss = document.getElementById("swiper_qamiss")

    const swiper_slippers = document.getElementById("swiper_slippers")

    const swiper_perfume = document.getElementById("swiper_perfume")


    data.forEach(product => {
        if(product.old_price){

            const isInCart = cart.some(cartItem => cartItem.id === product.id)

            const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
            
            swiper_items_sale.innerHTML += `


             <div class="swiper-slide product">
                        <span class="sale_present">%${percent_disc}</span>

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'في السلة' : 'أضف إلى السلة'}
                            </span>
                        </div>
                    </div>
            
            
            
            
            `
            
            
        }
    })


    data.forEach(product => {
        if(product.category == "qamiss"){


            const isInCart = cart.some(cartItem => cartItem.id === product.id)


            const old_price_Pargrahp = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";



            swiper_qamiss.innerHTML += `


            <div class="swiper-slide product">
                       
                        ${percent_disc_div}
                       <div class="img_product">
                           <a href="#"><img src="${product.img}" alt=""></a>
                       </div>

                       <p class="name_product"><a href="#">${product.name}</a></p>

                       <div class="price">
                           <p><span>$${product.price}</span></p>
                           ${old_price_Pargrahp}
                       </div>

                       <div class="icons">
                           <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'في السلة' : 'أضف إلى السلة'}
                            </span>
                       </div>
                   </div>
           
           
           
           
           `



        }
    })


    data.forEach(product => {
        if(product.category == "slippers"){

            const isInCart = cart.some(cartItem => cartItem.id === product.id)

            const old_price_Pargrahp = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";



            swiper_slippers.innerHTML += `


            <div class="swiper-slide product">
                       
                        ${percent_disc_div}
                       <div class="img_product">
                           <a href="#"><img src="${product.img}" alt=""></a>
                       </div>

                       <p class="name_product"><a href="#">${product.name}</a></p>

                       <div class="price">
                           <p><span>$${product.price}</span></p>
                           ${old_price_Pargrahp}
                       </div>

                       <div class="icons">
                        <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'في السلة' : 'أضف إلى السلة'}
                            </span>
                       </div>
                   </div>
           
           
           
           
           `



        }
    })


    data.forEach(product => {
        if(product.category == "perfume"){

            const isInCart = cart.some(cartItem => cartItem.id === product.id)

            const old_price_Pargrahp = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";



            swiper_perfume.innerHTML += `


            <div class="swiper-slide product">
                       
                        ${percent_disc_div}
                       <div class="img_product">
                           <a href="#"><img src="${product.img}" alt=""></a>
                       </div>

                       <p class="name_product"><a href="#">${product.name}</a></p>

                       <div class="price">
                           <p><span>$${product.price}</span></p>
                           ${old_price_Pargrahp}
                       </div>

                       <div class="icons">
                         <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'في السلة' : 'أضف إلى السلة'}
                            </span>
                       </div>
                   </div>
           
           
           
           
           `



        }
    })
    
    staggerProducts()
})

function staggerProducts() {
    const sections = document.querySelectorAll('.slide')
    if (!sections.length) return

    const preferReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    sections.forEach(section => {
        const products = section.querySelectorAll('.product')
        if (!products.length) return

        if (preferReducedMotion) {
            products.forEach(p => p.classList.add('visible'))
            return
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    products.forEach((product, i) => {
                        product.style.animationDelay = `${i * 0.21}s`
                        product.classList.add('visible')
                        const button = product.querySelector('.btn_add_cart')
                        if (button) {
                            button.style.animationDelay = `${i * 0.21 + 0.31}s`
                        }
                    })
                    observer.disconnect()
                }
            })
        }, { threshold: 0.1 })

        observer.observe(section)
    })
}
