"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class AddressBuilder {
    constructor(prefix) {
        this.address = '';
        this.address = this
            .address
            .concat(prefix);
    }
    append(data, start, end) {
        const hash = crypto_1.createHash('sha512')
            .update(data)
            .digest('hex')
            .substring(start, end);
        this.address = this
            .address
            .concat(hash);
        return this;
    }
    // tslint:disable-next-line:block-spacing
    build() { return this.address; }
}
exports.AddressBuilder = AddressBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tbW9uL2FkZHJlc3NfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBb0M7QUFFcEMsTUFBYSxjQUFjO0lBRXpCLFlBQVksTUFBZTtRQUQzQixZQUFPLEdBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTthQUNoQixPQUFPO2FBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBYSxFQUFFLEtBQWMsRUFBRSxHQUFZO1FBQ2hELE1BQU0sSUFBSSxHQUFXLG1CQUFVLENBQUMsUUFBUSxDQUFDO2FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDWixNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ2IsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7YUFDaEIsT0FBTzthQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCx5Q0FBeUM7SUFDekMsS0FBSyxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Q0FDekM7QUFyQkQsd0NBcUJDIn0=