#include <bits/stdc++.h>
using namespace std;
#define int long long
int solve(){
    int n;
    cin>>n;
    vector<int> a(n) ;
    for(int i  = 0 ; i < n ;i++){
        cin>>a[i] ;
    }
    if(n==1){
        return 0 ;
    }
    if(n==2){
        return 1 ;
    }
    int ans = 2 ; 
    for(int i  = 2 ; i < n-1 ;i++){
        int left = a[i] - a[i-1] ;
        int right = a[i+1] - a[i] ;
        if(right >= left){
            ans += 1 ;
        }
    }
    return ans  ;
}
#undef int
int main(){
    int t;
    cin>>t;
    while(t--){
        cout<<solve()<<endl;
    }
}