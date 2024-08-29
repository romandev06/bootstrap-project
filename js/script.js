const modalWindowSection = document.querySelector('.modal-window__section')
const modalWindowButton = document.querySelector('#dispatchModalWindow')

let dataArray = ['subscribed']



let parseData = JSON.parse(localStorage.getItem('subscribe'))

if (parseData) {
    console.log('ты подписался на мой гитхаб :) или обманул?')
} else {
    const clearIntervalModal = setInterval(() => {
        modalWindowButton.dispatchEvent(new PointerEvent('click'))
    }, 9000)

    modalWindowButton.addEventListener('click', () => {
        modalWindowSection.insertAdjacentHTML('beforeend', `
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header d-flex justify-content-between">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <a href="https://github.com/romandev06" target="_blank">Подпишись на мой GitHub :)</a>
                        </div>
                        <div class="modal-footer d-flex gap-3">
                            <button type="button" id="close-window" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button type="button" id="subscribe-btnWin" class="btn btn-primary">Хорошо, подпишусь</button>
                        </div>
                    </div>
                </div>
            </div>`
        )


        const subscribeBtn = document.getElementById('subscribe-btnWin')

        subscribeBtn.addEventListener('click', () => {
            localStorage.setItem('subscribe', JSON.stringify(dataArray))

            modalWindowSection.insertAdjacentHTML('beforeend', ``)
            clearInterval(clearIntervalModal)
        })
    })
}



const dropDownMenu = document.querySelector('.drop-down-menu')
dropDownMenu.addEventListener('click', (e) => e.preventDefault())