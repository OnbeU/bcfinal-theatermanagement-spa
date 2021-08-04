module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request for movies.');

    const response = [
        { "id": "tt0076759", "title": "Star Wars: Episode IV - A New Hope" },
        { "id": "tt0080684", "title": "Star Wars: Episode V - The Empire Strikes Back" },
        { "id": "tt0086190", "title": "Star Wars: Episode VI - Return of the Jedi" },
        { "id": "tt0193524", "title": "The Star Wars Holiday Special" }
    ];
    const responseMessage = JSON.stringify(response);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
        headers: {
            'Content-Type': 'application/json'
        }
    };
}