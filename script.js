document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        { name: "شكشوكة بالفول", img: "https://via.placeholder.com/200" },
        { name: "طريقة الممبار", img: "https://via.placeholder.com/200" },
        { name: "الأرز المكسيكي", img: "https://via.placeholder.com/200" },
        { name: "دجاج بالكاري", img: "https://via.placeholder.com/200" },
    ];

    const recipesContainer = document.getElementById("recipes");
    
    recipes.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");
        recipeElement.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
        `;
        recipesContainer.appendChild(recipeElement);
    });
});
