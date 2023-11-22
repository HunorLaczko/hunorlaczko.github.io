---
layout: project
title: pyramid-drape
full_title: A Generative Multi-Resolution Pyramid and Normal-Conditioning 3D Cloth Draping
description: WACV24 paper on garment draping
img: assets/img/pyramid-drape/drape.png
importance: 2
category: work
giscus_comments: true
---

<!---------------------------- HEADER ---------------------------->
<header class="project-title" style="text-align: center; ">
<h1 class="project-title" style="font-weight: bold; color: #404040">{{ page.full_title }}</h1>
<p class="project-venue" style="font-size: 2.5em;">{{ page.venue }}</p>
    <h3>
                    <a href="https://scholar.google.com/citations?user=RfLjJigAAAAJ&hl=en">Hunor Laczkó</a>, 
                    <a href="https://scholar.google.com/citations?user=hWMXdg4AAAAJ&hl=en">Meysam Madadi</a>,
                    <a href="https://scholar.google.com/citations?user=oI6AIkMAAAAJ&hl=en">Sergio Escalera</a>, and
                    <a href="https://scholar.google.com/citations?user=Lphp7WUAAAAJ&hl=en">Jordi Gonzàlez</a> 
    </h3>
<h5>Universitat Autònoma de Barcelona, Universitat de Barcelona and Computer Vision Center, Spain</h5>
<div class="publications project-links">
    <a href="https://arxiv.org/abs/2311.02700" class="btn" role="button">arXiv</a>
    <a href="https://github.com/HunorLaczko/pyramid-drape" class="btn" role="button">Code</a>
</div>
</header>


<!---------------------------- ABSTRACT ---------------------------->
<div class="h-100 d-flex align-items-center justify-content-center" style="margin-top: 30px">
    <div class="project-narrow" id="abstract" style="text-align: justify;">
    <h3 style="text-align: center;">Abstract</h3>
    <i>
    RGB cloth generation has been deeply studied in the related literature, however, 3D garment generation remains an open problem. In this paper, we build a conditional variational autoencoder for 3D garment generation and draping. We propose a pyramid network to add garment details progressively in a canonical space, i.e. unposing and unshaping the garments w.r.t. the body. We study conditioning the network on surface normal UV maps, as an intermediate representation, which is an easier problem to optimize than 3D coordinates. Our results on two public datasets, CLOTH3D and CAPE, show that our model is robust, controllable in terms of detail generation by the use of multi-resolution pyramids, and achieves state-of-the-art results that can highly generalize to unseen garments, poses, and shapes even when training with small amounts of data.
    </i>
    </div>
</div>


<!---------------------------- ARCHITECTURE ---------------------------->
<div class="h-100 d-flex align-items-center justify-content-center" style="margin-top: 30px">
    <div class="project-narrow" id="architecture" style="text-align: justify;">
        <h3 style="text-align: center;">Architecture</h3>
    </div>
</div>
<div style="margin-top:20px">
{% include figure.html path="assets/img/pyramid-drape/pipeline.png" title="pyramid-drape" class="figure-padding img-fluid rounded z-depth-1" %}
</div>

The proposed pyramid pipeline (right) contains basic VAE modules for each draping level (\textit{VAE}$_{drape}$, left). \textit{VAE}$_{drape}$ receives conditioning inputs and garment offsets and reconstructs the unposed and unshaped garment offsets as UV image. In the case of the first level instead of offsets, absolute coordinates are used (as shown on the left) as this will serve as a base for subsequent levels. The conditioning variables (normals, posed body, and garment template UV images) are given into three pre-trained and frozen encoders to fuse with the \textit{VAE}$_{drape}$ latent code. These conditioning encoders are trained separately in an autoencoder manner (note that normals are trained through \textit{VAE}$_{norm}$). Finally, the reconstructed UV image is converted to a mesh and passed to the skinning module after reshaping. Then, in the pyramid module, the lowest resolution level predicts low-frequency garments while the other levels are learned as offsets over their previous level. Each level output is upscaled with the proposed upscaling network and summed to the next level. At inference time, we sample from \textit{VAE}$_{norm}$ and \textit{VAE}$_{drape}$ and pass the template garment and posed body UV images.




<!---------------------------- BIBLIOGRAPHY ---------------------------->

<div class="h-100 d-flex align-items-center justify-content-center" style="margin-top: 30px">
    <div class="project-narrow" id="bibtex" style="text-align: justify;">
        <h3 style="text-align: center;">BibTeX</h3>
        <div class="bibtex">
        {% highlight bibtex %}
@misc{laczkó2023generative,
      title={A Generative Multi-Resolution Pyramid and Normal-Conditioning 3D Cloth Draping}, 
      author={Hunor Laczkó and Meysam Madadi and Sergio Escalera and Jordi Gonzalez},
      year={2023},
      eprint={2311.02700},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
}
{% endhighlight %}

        </div>
    </div>
</div>

