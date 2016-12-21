/**
 * Created by Tien Nguyen on 12/21/16.
 */
import {Category} from '../models/index';

export async function createCategory(params) {
    var category = new Category(params);
    return await category.save();
}
