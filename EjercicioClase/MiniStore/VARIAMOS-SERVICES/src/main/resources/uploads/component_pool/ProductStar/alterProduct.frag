Fragment ProductStar-AlterProduct1 { 
   Action: add
   Priority: high
   FragmentationPoints: attributes
   PointBracketsLan: java
   Destinations: Product-Model
   SourceCode: [ALTERCODE-FRAG]private int star;[/ALTERCODE-FRAG]
}

Fragment ProductStar-AlterProduct2 { 
   Action: add
   Priority: high
   FragmentationPoints: methods
   PointBracketsLan: java
   Destinations: Product-Model
   SourceCode: [ALTERCODE-FRAG]	public int getStar() {
		return star;
	}
	public void setStar(int star) {
		this.star = star;
	}[/ALTERCODE-FRAG]
}

Fragment ProductStar-AlterProduct3 { 
   Action: add
   Priority: high
   FragmentationPoints: params
   PointBracketsLan: java
   Destinations: Product-Model
   SourceCode: [ALTERCODE-FRAG], int star[/ALTERCODE-FRAG]
}

Fragment ProductStar-AlterProduct4 { 
   Action: add
   Priority: high
   FragmentationPoints: params-assign
   PointBracketsLan: java
   Destinations: Product-Model
   SourceCode: [ALTERCODE-FRAG]this.star = star;[/ALTERCODE-FRAG]
}