const cocktails = [
  {
    id: 1, name: "Margarita", emoji: "🍋", category: "sour",
    glass: "Coupette",
    tags: ["Classic", "Sour", "Tequila"],
    summary: "A timeless tequila sour — tart, salty, and dangerously smooth.",
    ingredients: ["2 oz tequila blanco", "1 oz fresh lime juice", "¾ oz triple sec", "Salt for rim", "Lime wheel garnish"],
    recipe: "Run a lime wedge around the rim of a coupette glass and dip in salt. Shake tequila, lime juice, and triple sec with ice. Strain into the glass and garnish with a lime wheel."
  },
  {
    id: 2, name: "Old Fashioned", emoji: "🥃", category: "classic",
    glass: "Rocks",
    tags: ["Classic", "Strong", "Whiskey"],
    summary: "The original cocktail — sugar, bitters, whiskey, and a twist of citrus.",
    ingredients: ["2 oz bourbon or rye", "1 sugar cube", "3 dashes Angostura bitters", "1 orange twist", "1 large ice cube"],
    recipe: "Muddle the sugar cube and bitters in a rocks glass. Add the whiskey and a large ice cube. Stir gently and express the orange twist over the glass, then drop it in."
  },
  {
    id: 3, name: "Mai Tai", emoji: "🌺", category: "tiki",
    glass: "Double rocks",
    tags: ["Tiki", "Fruity", "Rum"],
    summary: "The king of tiki — a tropical paradise in a glass.",
    ingredients: ["2 oz aged rum", "¾ oz fresh lime juice", "½ oz orange curaçao", "¼ oz orgeat syrup", "¼ oz simple syrup", "Mint sprig & lime shell garnish"],
    recipe: "Shake all ingredients with crushed ice. Pour into a double rocks glass. Garnish with a mint sprig and a spent lime shell."
  },
  {
    id: 4, name: "Negroni", emoji: "🔴", category: "classic",
    glass: "Rocks",
    tags: ["Classic", "Bitter", "Boozy"],
    summary: "Equal parts gin, sweet vermouth, and Campari — bitter perfection.",
    ingredients: ["1 oz gin", "1 oz sweet vermouth", "1 oz Campari", "Orange twist"],
    recipe: "Stir all ingredients with ice. Strain into a rocks glass over a large ice cube. Garnish with an orange twist."
  },
  {
    id: 5, name: "Piña Colada", emoji: "🍍", category: "tiki",
    glass: "Hurricane",
    tags: ["Tiki", "Creamy", "Sweet"],
    summary: "Creamy coconut and pineapple bliss — vacation mode activated.",
    ingredients: ["2 oz white rum", "1½ oz coconut cream", "1½ oz pineapple juice", "½ oz fresh lime juice", "Pineapple wedge & cherry garnish"],
    recipe: "Blend all ingredients with 1 cup crushed ice until smooth. Pour into a hurricane glass. Garnish with a pineapple wedge and cherry."
  },
  {
    id: 6, name: "Whiskey Sour", emoji: "🍋", category: "sour",
    glass: "Coupette",
    tags: ["Sour", "Classic", "Whiskey"],
    summary: "Bourbon, lemon, sugar — the perfect balancing act.",
    ingredients: ["2 oz bourbon", "¾ oz fresh lemon juice", "½ oz simple syrup", "½ oz egg white (optional)", "Angostura bitters & cherry garnish"],
    recipe: "Dry shake all ingredients (no ice) for 10 seconds if using egg white. Add ice and shake hard. Strain into a coupette. Garnish with a few drops of bitters and a cherry."
  },
  {
    id: 7, name: "Mojito", emoji: "🌿", category: "highball",
    glass: "Highball",
    tags: ["Highball", "Refreshing", "Rum"],
    summary: "Mint, lime, rum — the ultimate refresher.",
    ingredients: ["2 oz white rum", "¾ oz fresh lime juice", "½ oz simple syrup", "6-8 fresh mint leaves", "Soda water", "Mint sprig & lime wheel garnish"],
    recipe: "Muddle mint leaves with simple syrup in a highball glass. Add lime juice and rum, then fill with ice. Top with soda water and stir gently. Garnish with mint and lime."
  },
  {
    id: 8, name: "Espresso Martini", emoji: "☕", category: "fancy",
    glass: "Coupette",
    tags: ["Fancy", "Coffee", "Boozy"],
    summary: "Vodka meets espresso — the party pick-me-up.",
    ingredients: ["1½ oz vodka", "1 oz coffee liqueur", "1 oz fresh espresso", "½ oz simple syrup", "3 coffee beans (garnish)"],
    recipe: "Shake all ingredients hard with ice until well-chilled. Strain into a coupette. Garnish with 3 coffee beans floating on top."
  },
  {
    id: 9, name: "Aperol Spritz", emoji: "🍊", category: "highball",
    glass: "Wine",
    tags: ["Highball", "Aperitif", "Light"],
    summary: "Bright, bubbly, and dangerously drinkable — Italian summer in a glass.",
    ingredients: ["3 oz Prosecco", "2 oz Aperol", "1 oz soda water", "Orange slice"],
    recipe: "Fill a wine glass with ice. Add Prosecco, then Aperol. Top with a splash of soda water. Garnish with an orange slice."
  },
  {
    id: 10, name: "Daiquiri", emoji: "🍈", category: "sour",
    glass: "Coupette",
    tags: ["Classic", "Sour", "Rum"],
    summary: "The original daiquiri — just three ingredients, pure magic.",
    ingredients: ["2 oz white rum", "1 oz fresh lime juice", "¾ oz simple syrup"],
    recipe: "Shake all ingredients with ice. Strain into a chilled coupette. No garnish — keep it pure."
  },
  {
    id: 11, name: "French 75", emoji: "🥂", category: "fancy",
    glass: "Flute",
    tags: ["Fancy", "Bubbly", "Gin"],
    summary: "Gin, lemon, Champagne — elegant and potent.",
    ingredients: ["1½ oz gin", "¾ oz fresh lemon juice", "½ oz simple syrup", "2 oz Champagne", "Lemon twist"],
    recipe: "Shake gin, lemon juice, and simple syrup with ice. Strain into a flute. Top with Champagne. Garnish with a lemon twist."
  },
  {
    id: 12, name: "Dark 'n Stormy", emoji: "⛈️", category: "highball",
    glass: "Highball",
    tags: ["Highball", "Ginger", "Rum"],
    summary: "Dark rum and ginger beer — a storm you'll want to get caught in.",
    ingredients: ["2 oz dark rum", "4 oz ginger beer", "¾ oz fresh lime juice", "Lime wedge"],
    recipe: "Fill a highball glass with ice. Add lime juice and ginger beer. Float the dark rum on top by pouring over a bar spoon. Garnish with a lime wedge."
  },
  {
    id: 13, name: "Cosmopolitan", emoji: "💗", category: "fancy",
    glass: "Coupette",
    tags: ["Fancy", "Sour", "Vodka"],
    summary: "Vodka, cranberry, lime — chic, tart, and iconic.",
    ingredients: ["1½ oz vodka", "1 oz cranberry juice", "½ oz triple sec", "½ oz fresh lime juice", "Lime wheel"],
    recipe: "Shake all ingredients with ice. Strain into a chilled coupette. Garnish with a lime wheel."
  },
  {
    id: 14, name: "Moscow Mule", emoji: "🫚", category: "highball",
    glass: "Copper mug",
    tags: ["Highball", "Ginger", "Vodka"],
    summary: "Vodka, ginger beer, lime — crisp and refreshing in a copper mug.",
    ingredients: ["2 oz vodka", "½ oz fresh lime juice", "4 oz ginger beer", "Lime wedge & mint sprig"],
    recipe: "Fill a copper mug with ice. Add vodka and lime juice. Top with ginger beer and stir. Garnish with lime and mint."
  },
  {
    id: 15, name: "Sidecar", emoji: "🍑", category: "sour",
    glass: "Coupette",
    tags: ["Classic", "Sour", "Cognac"],
    summary: "Cognac, lemon, orange liqueur — a sophisticated sour.",
    ingredients: ["2 oz cognac", "¾ oz fresh lemon juice", "¾ oz triple sec", "Sugar for rim"],
    recipe: "Rim a coupette with sugar. Shake all ingredients with ice. Strain into the glass."
  },
  {
    id: 16, name: "Zombie", emoji: "🧟", category: "tiki",
    glass: "Hurricane",
    tags: ["Tiki", "Strong", "Rum"],
    summary: "Multiple rums, tropical juices — this zombie will knock you off your feet.",
    ingredients: ["1½ oz light rum", "1½ oz dark rum", "1 oz overproof rum", "1 oz fresh lime juice", "1 oz pineapple juice", "1 oz orange juice", "½ oz grenadine", "Mint sprig"],
    recipe: "Shake all ingredients except overproof rum with crushed ice. Pour into a hurricane glass. Float the overproof rum on top. Garnish with mint."
  },
  {
    id: 17, name: "Manhattan", emoji: "🏙️", category: "classic",
    glass: "Coupette",
    tags: ["Classic", "Strong", "Whiskey"],
    summary: "Rye, sweet vermouth, bitters — New York in a glass.",
    ingredients: ["2 oz rye whiskey", "1 oz sweet vermouth", "2 dashes Angostura bitters", "1 brandied cherry"],
    recipe: "Stir all ingredients with ice. Strain into a chilled coupette. Garnish with a brandied cherry."
  },
  {
    id: 18, name: "Singapore Sling", emoji: "🌅", category: "fancy",
    glass: "Hurricane",
    tags: ["Fancy", "Fruity", "Gin"],
    summary: "A complex, fruity gin concoction born at the Raffles Hotel.",
    ingredients: ["1½ oz gin", "½ oz cherry liqueur", "¼ oz Cointreau", "¼ oz Benedictine", "2 oz pineapple juice", "½ oz lime juice", "½ oz grenadine", "Dash Angostura bitters", "Soda water", "Pineapple wedge & cherry"],
    recipe: "Shake all ingredients except soda with ice. Strain into a hurricane glass filled with ice. Top with soda. Garnish with pineapple and cherry."
  },
  {
    id: 19, name: "Paloma", emoji: "🍊", category: "highball",
    glass: "Highball",
    tags: ["Highball", "Refreshing", "Tequila"],
    summary: "Tequila and grapefruit soda — Mexico's favorite highball.",
    ingredients: ["2 oz tequila blanco", "½ oz fresh lime juice", "Pinch of salt", "Grapefruit soda (to top)", "Grapefruit wedge"],
    recipe: "Rim a highball glass with salt. Fill with ice. Add tequila, lime juice, and a pinch of salt. Top with grapefruit soda. Garnish with a grapefruit wedge."
  },
  {
    id: 20, name: "Martini", emoji: "🫒", category: "classic",
    glass: "Coupette",
    tags: ["Classic", "Strong", "Gin"],
    summary: "Gin and vermouth — the undisputed king of cocktails.",
    ingredients: ["2½ oz gin", "½ oz dry vermouth", "1 olive or lemon twist"],
    recipe: "Stir gin and vermouth with ice. Strain into a chilled coupette. Garnish with an olive or lemon twist."
  }
];

let currentFilter = 'all';

function enterSite() {
  document.getElementById('splash').classList.add('hidden');
  renderCocktails(cocktails);
}

function renderCocktails(list) {
  const grid = document.getElementById('cocktailGrid');
  grid.innerHTML = list.map(c => `
    <div class="card" onclick="openModal(${c.id})">
      <span class="card-emoji">${c.emoji}</span>
      <h3>${c.name}</h3>
      <p class="summary">${c.summary}</p>
      <div class="tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function filterCocktails() {
  const q = document.getElementById('search').value.toLowerCase();
  const filtered = cocktails.filter(c =>
    (currentFilter === 'all' || c.category === currentFilter) &&
    (c.name.toLowerCase().includes(q) ||
     c.ingredients.some(i => i.toLowerCase().includes(q)) ||
     c.tags.some(t => t.toLowerCase().includes(q)))
  );
  renderCocktails(filtered);
}

function setFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterCocktails();
}

function openModal(id) {
  const c = cocktails.find(x => x.id === id);
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <div class="modal-header">
      <span class="emoji">${c.emoji}</span>
      <h2>${c.name}</h2>
    </div>
    <span class="glass-info">🥂 ${c.glass} glass</span>
    <h3>🧪 Ingredients</h3>
    <ul>${c.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    <h3>📖 Recipe</h3>
    <p class="recipe-text">${c.recipe}</p>
  `;
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function showRandom() {
  const pick = cocktails[Math.floor(Math.random() * cocktails.length)];
  openModal(pick.id);
}
