n = int(input())
_n =str(n+0)
_n_int = int(_n)
_n_nozero = _n
_n_len = int(len(_n))
zero_num = 0
for num in range(1,len(_n)-1):
    if _n_int%(10**num)==0:
        zero_num += 1
_n_nozero = _n[0:_n_len - zero_num]
ans = "Yes"
for num in range(0,len(_n_nozero)):
    if _n_nozero[num] != _n_nozero[-1-num]:
        ans = "No"

print(ans)