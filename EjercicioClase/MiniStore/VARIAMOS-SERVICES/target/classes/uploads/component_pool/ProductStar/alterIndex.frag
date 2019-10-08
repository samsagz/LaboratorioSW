Fragment ProductStar-AlterIndex { 
   Action: replace
   Priority: high
   FragmentationPoints: productobject
   PointBracketsLan: java
   Destinations: Index-Control
   SourceCode: [ALTERCODE-FRAG]Product p1=new Product(1,"TV 50",100,5);[/ALTERCODE-FRAG]
}