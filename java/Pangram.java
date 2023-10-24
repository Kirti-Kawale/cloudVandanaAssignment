import java.util.Scanner;
public class Pangram {
	public static boolean isPangram(String str) {
		String s="qwertyuiopasdfghjklzxcvbnm";
		if(str.length()<26) {
			return false;
		}else {
			for(int i=0;i<s.length();i++) {
				int flag=0;
				for(int j=0;j<str.length();j++) {
					if(str.charAt(j)==s.charAt(i)) {
						flag++;
						break;
					}
				}
				if(flag==0) {
					return false;
				}
			}
			return true;
		}
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the String");
		String s=sc.nextLine();
		System.out.println(isPangram(s));
		sc.close();
	}

}
