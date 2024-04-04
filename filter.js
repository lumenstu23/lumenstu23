// Sample data for items
let items = [
    { name: 'Gold Earrings', color: 'gold', tags: ['earrings'], size: '', collection: 'shop all' },
    { name: 'Silver Ring', color: 'silver', tags: ['rings'], size: '6', collection: 'what\'s new' },
    { name: 'Gemstone Necklace', color: 'gemstone', tags: ['necklaces'], size: '', collection: 'Shine Finds' }
    // Add more items as needed
];

// Function to filter items based on selected filters
function filterItems(color, tag, size, collection) {
    return items.filter(item => 
        (!color || item.color === color) &&
        (!tag || item.tags.includes(tag)) &&
        (!size || item.size === size) &&
        (!collection || item.collection === collection)
    );
}
