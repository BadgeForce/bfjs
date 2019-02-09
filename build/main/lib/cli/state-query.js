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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NsaS9zdGF0ZS1xdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFdEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3RDLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxHQUFHLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLGtCQUFrQixPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLHVDQUF1QyxPQUFPLEVBQUUsQ0FBQztRQUNuRCxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU87YUFDM0IsR0FBRyxDQUFDLFFBQVEsQ0FBQzthQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQzNCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7YUFDdkMsS0FBSyxDQUFDO1lBQ0wsT0FBTztTQUNSLENBQUMsQ0FBQztRQUNMLE1BQU0sRUFDSixJQUFJLEVBQ0wsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsTUFBTSxDQUFDLENBQUM7S0FDVDtBQUNILENBQUMsQ0FBQyJ9