const tbody = document.getElementById('output');
tbody.innerHTML=`<tr>Loading...</tr>`
const promise1 = ()=>{
	return new Promise((resolve)=>{
		let val = Math.floor(Math.random() * 3)+1;
		 
		setTimeout(()=>{
			resolve(parseFloat(val));
		},val*1000)
	})
};

const promise2 = ()=>{
	return new Promise((resolve)=>{
		let val = Math.floor(Math.random() * 3)+1;
		 
		setTimeout(()=>{
			resolve(parseFloat(val));
		},val*1000)
	})
};
const promise3 = ()=>{
	return new Promise((resolve)=>{
		let val = Math.floor(Math.random() * 3)+1;
		 
		setTimeout(()=>{
			resolve(parseFloat(val));
		},val*1000)
	})
};
let i=1;
let total =0;
 Promise.all([promise1(),promise2(),promise3()]).then((data)=>{
	 tbody.innerHTML=" ";
	   data.map((val,index)=>{
		   const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	td1.textContent=`Promise ${index+1}`;
	td2.textContent=`${val}`;
	total+=val;
	tr.appendChild(td1);
	tr.appendChild(td2);
	 
	tbody.appendChild(tr);
	   })
	 tbody.innerHTML+=`<tr>
   <td>Total</td>
   <td>${total.toFixed(3)}</td>
</tr>`
});
 




