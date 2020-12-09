## Sample iOS SwiftUi @State and @binding data tutorial

#### Dec 9, 2020 by [Ying]


This tutorial shows a few different types of data that are supported and added in
SwiftUI. Basic @State, @binding. 


## @State

Beside constants and variable, SwiftUI provides a way to to designate a variable known as @State variable. When this variable changes, SwiftUI views replace the data and recomputes its body. 

It is very similar to angular's two way binding.  

        import SwiftUI
    
        @State private var color

        struct ContentView: View{
            var body: some View{}
                Text("Hello World")
                    .foregroundColor(textColor)
                 ColorPicker("Alignment Guides", selection: $textColor)

                 ShedView(value: $textColor)
            }
        }

        static var previes: some View {
            ContentView(textColor:Color.blue).previewLayout(.fixed(width:568,height:320))
        }
    
* To use the @State variable in our ContentView, just use variable name.

* For the @State variable to affect the view,  we just need to add a $ in front of variable
name.

## @binding

Usage of @Binding variable

When coding in SwiftUI, extract Subview is very common activity to separate our views into 
reusable views. Each Subview can get data from their parent. 

- Subview
- When the data is coming from parent view

    strut SubView: View{
        @Binding var value: Color  

        VStack {
            Text("Legs = \(animal.legs)")
                ..foregroundColor(value)
       }           
   }

* @Binding variable is great for reusability of data and it can be accessing with the 
prefix $. 

