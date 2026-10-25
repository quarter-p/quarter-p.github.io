<h2 id="projects">{{ include.projects_heading | default: "Projects" }}</h2>

<div class="projects">
{% for project in site.data.projects.main %}
  {% assign project_description = project.description %}
  {% assign project_image_alt = project.image_alt %}
  {% if include.lang == "zh" %}
    {% assign project_description = project.description_zh | default: project.description %}
    {% assign project_image_alt = project.image_alt_zh | default: project.image_alt %}
  {% endif %}
  <article class="project-card">
    <a class="project-image" href="{{ project.website }}" target="_blank" rel="noopener">
      <img src="{{ project.image | relative_url }}" alt="{{ project_image_alt }}" loading="lazy">
    </a>
    <div class="project-content">
      <h3><a href="{{ project.website }}" target="_blank" rel="noopener">{{ project.name }}</a></h3>
      <p>{{ project_description }}</p>
      <div class="project-links">
        <a href="{{ project.website }}" target="_blank" rel="noopener">{{ include.website_label | default: "Website" }}</a>
        {% if project.paper %}
        <a href="{{ project.paper }}" target="_blank" rel="noopener">{{ include.paper_label | default: "Paper" }}</a>
        {% endif %}
        {% if project.code %}
        <a href="{{ project.code }}" target="_blank" rel="noopener">{{ include.code_label | default: "Code" }}</a>
        {% endif %}
      </div>
    </div>
  </article>
{% endfor %}
</div>
