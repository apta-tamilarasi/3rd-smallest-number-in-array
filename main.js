var arr=[];
var n=prompt("Enter the value");

	
for (let i=0; i<n; i++){
	arr[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given Array = "+arr+"<br><br>");

var b=[];
var c=0;

for (let i=0; i<arr.length;  i++){
	for (let j=i+1; j<arr.length; j++){
		if(arr[i]>arr[j]){
			c=arr[j];
			arr[j]=arr[i];
			arr[i]=c;
		}
	}
		b.push(arr[i]);
}

document.write("3rd smallest number = "+b[2]);