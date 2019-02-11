const request = require('superagent');
module.exports = async (address, uri) => {
    try {
        const endpoint = uri !== "" && uri ? `${uri}/state?address=${address}` :
            `http://127.0.0.1:8008/state?address=${address}`;
        const response = await request
            .get(endpoint)
            .ok(res => res.status < 300)
            .set('Content-Type', 'application/json')
            .query({
            address
        });
        const { data } = response.body;
        return data.data;
    }
    catch (e) {
        throw e;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpL3N0YXRlLXF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV0QyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdEMsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDdEUsdUNBQXVDLE9BQU8sRUFBRSxDQUFDO1FBQ25ELE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTzthQUMzQixHQUFHLENBQUMsUUFBUSxDQUFDO2FBQ2IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7YUFDM0IsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQzthQUN2QyxLQUFLLENBQUM7WUFDTCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBQ0wsTUFBTSxFQUNKLElBQUksRUFDTCxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixNQUFNLENBQUMsQ0FBQztLQUNUO0FBQ0gsQ0FBQyxDQUFDIn0=