<h2 id="projects">Projects</h2>

<div class="projects">
{% for project in site.data.projects.main %}
  <article class="project-card">
    <a class="project-image" href="{{ project.website }}" target="_blank" rel="noopener">
      <img src="{{ project.image }}" alt="{{ project.image_alt }}" loading="lazy">
    </a>
    <div class="project-content">
      <h3><a href="{{ project.website }}" target="_blank" rel="noopener">{{ project.name }}</a></h3>
      <p>{{ project.description }}</p>
      <div class="project-links">
        <a href="{{ project.website }}" target="_blank" rel="noopener">Website</a>
        {% if project.paper %}
        <a href="{{ project.paper }}" target="_blank" rel="noopener">Paper</a>
        {% endif %}
        {% if project.code %}
        <a href="{{ project.code }}" target="_blank" rel="noopener">Code</a>
        {% endif %}
      </div>
    </div>
  </article>
{% endfor %}
</div>
