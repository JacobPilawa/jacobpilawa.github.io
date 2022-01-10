#!/usr/bin/env python
# coding: utf-8

# # Radiative Quantities

# ## Specific Intensity

# Specific intensity (SI), $I_\nu$ is the amount of flux radiated per solid angle per unit bandwidth. SI is so constructed because it is conserved along a ray. This makes it a useful quantity for propagating radiative quantities in numerical and theoretical simulations, and for forming an observable quantity that all observers can agree upon (given certain telescope conditions). 

# Specific intensity may be written $I_\nu$ or $I_\lambda$, with units: 

# $$
# \boxed{I_\nu = \frac{\text{ergs}}{\text{s} \cdot \text{sr} \cdot \text{cm}^2 \cdot \text{Hz}}}
# $$
# 
# $$
# \boxed{I_\lambda = \frac{\text{ergs}}{\text{s} \cdot \text{sr} \cdot \text{cm}^2 \cdot \text{cm}}}
# $$

# Note that $I_\nu \neq I_\lambda$ because $d\nu \neq d\lambda$. However:
# 
# $$
# \nu I_\nu = \lambda I_\lambda
# $$

# ## Other Units of Radiation

# We can motivate using SI by comparing it to other ways we have of describing energy transfer. Some of tese other ways are:
# 
# 
# 
# * **Voltage**
# 
# * **Power:** can be averaged over time, but contains no information on the bandwidth the measurement was made over. The unit dBm may not be familiar to most astronomers. It refers to decibels relative to a milliwatt:
# 
# $$
# {P_{\rm {dBm}}=10\log _{10}\left({\frac {P}{1~{\rm {mW}}}}\right)\,\!}
# $$
# 
# * **Power Density:** (with units of ergs/s/Hz, or dBm/Hz), divides out by the bandwidth $B$ that the measurement is made over. However, it contains no information about how large an area this signal was collected over.
# 
# 
# * **Flux**: Flux, $F$, (with units of ergs/s/cm$^{2}$) divides power received by the area the signal was collected over, but it does not divide by the bandwidth. Because flux has a notion of area (i.e. the surface through which power has passed), flux has an associated direction normal to that surface. Thus, depending which side of a surface you are measuring flux on (defined by the handedness of the perimeter of your surface), you can have a positive or negative flux, even though power is always positive.
# 
# 
# * **Flux Density**: Flux density, $F_\nu$, (with units of ergs/(s cm$^2$ Hz), or Jy) combines the concepts of power density and flux to get a measurement that divides out both bandwidth and collecting area.  
# Most astronomers can agree on the flux density of a source, but **if the beam of your telescope is smaller than the source on the sky**, you can get a different answer because you are not be getting all the photons from that source--you are only getting the ones illuminated by your beam.
# Flux density is power per unit frequency passing through a 
# differential area whose normal is $\hat n$.  It relates to a plane-parallel specific intensity ($I_\nu$) by integrating over solid angle
# $$
# F_\nu=\int{I_\nu\cos\theta d\Omega},
# $$
# 
# where $\theta$ is the angle between $\hat n$ (the normal vector of the surface) and the direction of incidence of the specific intensity.
# Radio astronomers commonly use flux densities with units of Janskies.  A Jansky is defined as:
# 
# $$
# 1~{\rm Jy}\equiv 1e-23 \frac{\rm erg}{{\rm s}\cdot {\rm cm}^2\cdot {\rm Hz}}
# $$
# 
# 
# * **Specific Intensity**
# Specific intensity (with units of ergs/(s cm$^2$ Hz sr), Jy/beam) divides flux density by the angular area of the measurement (or of the source), and is intrinsic to source.  Just like flux, specific intensity has a notion of area, and therefore, a notion of propagation in the direction normal to that surface, $\hat n$.  Unlike flux density, specific intensity is conserved along a ray.
# Flux density (above) is related to specific intensity by integrating over solid angle:
# 
# 
# 
# * **Brightness Temperature**
# Brightness temperature (with units of K) uses the Rayleigh-Jeans tail of a blackbody spectrum to define an equivalent temperature corresponding to a specific intensity.  It is often used as a proxy for specific intensity. (See below and [[Black-Body Radiation]].)
# 
# $$
# I_\nu=\frac{2kT_b}{\lambda^2}
# $$
# 

# ## The Blackbody

# 
# A blackbody is the simplest source: it absorbs and reemits radiation with
# 100\% efficiency.  The frequency content of blackbody radiation is given by
# the *_Planck Function_*:
# 
# $$\def\ehv{e^{{h\nu \over kT}}}$$
# $$B_\nu={h\nu\over\lambda^2}{2\over(\ehv-1)}$$
# 
# 
# $$
# \boxed{B_\nu = \frac{2h\nu^3}{c^2} \frac{1}{\ehv - 1}} \neq B_\lambda
# $$
# 
# Derivation:
# The \# density of photons having frequency between $\nu$ and $\nu+d\nu$ has
# to equal the \# density of phase-space cells in that region, multiplied by
# the occupation \# per cell.  Thus:
# 
# $$
# n_\nu d\nu={4\pi\nu^2d\nu\over c^3}{2\over\ehv-1}
# $$
# 
# However,
# 
# $$
# h\nu{n_\nu c\over 4\pi}=I_\nu=B_\nu
# $$
# 
# so we have it.  
# 
# In the limit that $h\nu\gg kT$ (Wein Tail):
# 
# $$
# B_\nu\approx{2h\nu^3\over c^2}e^{-{h\nu\over kT}}
# $$
# 
# 
# If $h\nu\ll kT$ (Rayleigh-Jeans tail):
# 
# $$
# B_\nu\approx{2kT\over\lambda^2}
# $$
# 
# Note that this tail peaks at $\sim {3kT\over h}$. Also,
# $$
# \nu I_\nu=\lambda I_\lambda
# $$

# In[ ]:




