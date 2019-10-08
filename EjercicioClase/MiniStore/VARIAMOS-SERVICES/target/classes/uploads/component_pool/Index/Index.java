package uploads.component_pool.Index;

import uploads.component_pool.Product.Product;

public class Index {
	public static void main(String[] args) {
		/*BCP-store-name*/
		System.out.println("Welcome to the store called: XXXXXXX");
		/*ECP-store-name*/
		System.out.println("Check the new product:");
		/*B-productobject*/
		Product p1=new Product(1,"TV 50",100);
		/*E-productobject*/
		System.out.println(p1.getName() + " - price " + p1.getPrice());
	}
}
