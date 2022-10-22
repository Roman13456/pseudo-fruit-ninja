const createViews = (title, image) => {
    return `
        <div>
            <h3>
                ${`${title}`}
            </h3>
            <img width="200" src="${image}" alt="">
        </div>
    `
}
