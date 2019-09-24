function calculate_tip(){
	let bill = document.getElementById('bill_amount').value;
	let tip_p = document.getElementById('tip_perc').value; 
	
	if(bill==''){
		alert('Amount can not be empty! please enter a valid amount');
	}
	else if(tip_p==''){
		alert('Tip percentage can not be empty! please enter a valid percentage');
	}
	else{
		var num = [1,2,3,4,5,6,7,8,9,0];

		// alert(typeof num);
		// alert(typeof bill);
		// alert(typeof tip_perc);
		var dot = '.';
		var count = 0;

		var check1 = true;
		var check2 = true;
		
		for(var i=0;i<bill.length;i++){
			var flag = true;
			for(var j=0;j<num.length;j++){
				if(bill[i]==num[j]){
					flag = false;
					break;
				}else if(bill[i]==dot){
					flag = false;
					count += 1;
					break;
				}
			}
			if(count>1){
				check1 = false;		
				alert('please enter a valid bill_amount');			
				break;
			}
			if(flag){
				check1 = false;
				alert('bill_amount can only be numeric');
				break;
			}

		}

		count = 0;

		for(var i=0;i<tip_p.length;i++){
			var flag = true;
			for(var j=0;j<num.length;j++){
				if(tip_p[i]==num[j]){
					flag = false;
					break;
				}else if(tip_p[i]==dot){
					flag = false;
					count += 1;
					break;
				}
			}
			if(count>1){
				check2 = false;
				alert('sorry! Tip percentage is not a numeric value');
				break;
			}
			if(flag){
				check2 = false;
				alert('tip percentage can only be numeric');
				break;
			}
			
		}
		if(check1 && check2){
			bill = Number(bill);		

			let tip = bill*tip_p/100;
			let total = tip+bill;
			total = total.toFixed(2);
			tip = tip.toFixed(2);
			document.getElementById('tip').value = tip;
			document.getElementById('total').value = total;
		}else{
			document.getElementById('tip').value = '';
			document.getElementById('total').value = '';
			if(check1==false){
				document.getElementById('bill_amount').focus();
			}else if(check2==false){
				document.getElementById('tip_perc').focus();
				
			}
		}
	}
	
}