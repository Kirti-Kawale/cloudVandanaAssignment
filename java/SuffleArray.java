
public class SuffleArray {
	public static int[] suffle(int num[]) {
		
	  for(int i=0, j=(num.length)/2;i<(num.length)/2 && j<num. length;i++,j++){
			int temp=num[i];
			num[i]=num[j];
			num[j]=temp;
		}
		print(num);
		return num;
	}
	public static void print(int [] num) {
		for(int i=0;i<num.length;i++) {
			System.out.print(num[i]+" ");
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 int num[]= {1,2,3,4,5,6,7};
		   suffle(num);
	}

}
