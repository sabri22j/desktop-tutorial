import numpy as np,pyworld as pw
def fx(a,sr,gain=1.5,shift=6.0,formant=1.15,fs=24000):
    n=int(len(a)*fs/sr);y=np.interp(np.linspace(0,len(a)-1,n),np.arange(len(a)),a).astype(np.float64)
    f0,t=pw.harvest(y,fs,f0_floor=60,f0_ceil=450,frame_period=5.0);f0=pw.stonemask(y,f0,t,fs)
    sp=pw.cheaptrick(y,f0,t,fs);ap=pw.d4c(y,f0,t,fs)
    v=f0>0
    if v.any():
        lf=np.log(f0[v]);m=np.median(lf);new=m+gain*(lf-m)+shift*np.log(2)/12;f0n=f0.copy();f0n[v]=np.exp(new)
    else:f0n=f0
    bins=sp.shape[1];idx=np.arange(bins)/formant;idx=np.clip(idx,0,bins-1)
    spn=np.empty_like(sp)
    for i in range(sp.shape[0]):spn[i]=np.interp(idx,np.arange(bins),sp[i])
    out=pw.synthesize(f0n,spn,ap,fs,5.0)
    out=out/max(1e-6,np.abs(out).max())*.9
    return out.astype(np.float32),fs
