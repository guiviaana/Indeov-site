const productSelect = document.getElementById('productSelect');
const productDetails = document.getElementById('productDetails');

const products = [
  { name: 'CBD Oil (Full Spectrum 500mg) 30ml', mgtotal: 500, volume: 30 },
  { name: 'CBD Oil (Full Spectrum 1000mg) 30ml', mgtotal: 1000, volume: 30 },
  { name: 'CBD Oil (Full Spectrum 2000mg) 30ml', mgtotal: 2000, volume: 30 },
  { name: 'CBD Oil (Full Spectrum 3000mg) 30ml', mgtotal: 3000, volume: 30 },
  { name: 'CBD Oil (Full Spectrum 3000mg) 60ml', mgtotal: 3000, volume: 60 },
  { name: 'CBD Oil (Full Spectrum 5000mg) 60ml', mgtotal: 5000, volume: 60 },
  { name: 'CBD + CBG Balance Oil (Full Spectrum 2000mg) 30ml', mgtotal: 2000, volume: 30 },
  { name: 'CBG Oil Focus (Full Spectrum 2000mg) 30ml', mgtotal: 2000, volume: 30 },
  { name: 'CBD + CBN Oil for Sleep (Full Spectrum 4000mg) 60ml', mgtotal: 4000, volume: 60 },
  { name: 'CBD Oil (Full Spectrum 120000mg) 60ml', mgtotal: 12000, volume: 60 },
  { name: 'CBD Oil (Broad Spectrum 500mg) 30ml', mgtotal: 2000, volume: 30 },
];

function fillProductDropdown() {
  products.forEach((product, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

function showProductDetails(selectedValue) {
  if (selectedValue === '0') {
    productDetails.style.display = 'none';
  } else {
    const selectedProduct = products[selectedValue - 1];
/*    const productHTML = `
      <h2>${selectedProduct.name}</h2>
      <p>Miligramagem: ${selectedProduct.mgtotal}</p>
      <p>Tamanho: ${selectedProduct.volume}ml</p>
    `;
    productDetails.innerHTML = productHTML;
    productDetails.style.display = 'block';
*/
    setSelectedProduct(selectedProduct); // Chama a função para definir o produto selecionado no arquivo 1
  }
}

fillProductDropdown();

productSelect.addEventListener('change', () => {
  const selectedValue = productSelect.value;
  showProductDetails(selectedValue);
});
